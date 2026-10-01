"use client";

import { useMemo, useState } from "react";
import styles from "./page.module.css";

export default function ROICalculator() {
  const [monthlyLeads, setMonthlyLeads] = useState(150);
  const [avgValue, setAvgValue] = useState(600);
  const [responseTime, setResponseTime] = useState(4); // hours
  const [conversionRate, setConversionRate] = useState(20); // %
  const [missedPercent, setMissedPercent] = useState(20); // %
  const [hourlyCost, setHourlyCost] = useState(25);
  const [manualHours, setManualHours] = useState(15); // hours/week

  const results = useMemo(() => {
    const missedLeads = monthlyLeads * (missedPercent / 100);
    // Assume automation recovers 70% of currently-missed leads.
    const recoveredLeads = missedLeads * 0.7;
    const recoveredAppointments = recoveredLeads * (conversionRate / 100);
    const revenueOpportunity = recoveredAppointments * avgValue;
    const hoursSavedMonthly = manualHours * 4.33 * 0.6; // assume 60% of manual hours automated
    const monthlySavings = hoursSavedMonthly * hourlyCost;
    const annualSavings = monthlySavings * 12;
    const estimatedInvestment = 25000;
    const paybackMonths = monthlySavings > 0 ? estimatedInvestment / monthlySavings : 0;
    const roiPercent = estimatedInvestment > 0 ? ((annualSavings - estimatedInvestment) / estimatedInvestment) * 100 : 0;

    return {
      recoveredLeads: Math.round(recoveredLeads),
      recoveredAppointments: Math.round(recoveredAppointments),
      revenueOpportunity: Math.round(revenueOpportunity),
      hoursSavedMonthly: Math.round(hoursSavedMonthly),
      monthlySavings: Math.round(monthlySavings),
      annualSavings: Math.round(annualSavings),
      estimatedInvestment,
      paybackMonths: Math.round(paybackMonths * 10) / 10,
      roiPercent: Math.round(roiPercent),
    };
  }, [monthlyLeads, avgValue, conversionRate, missedPercent, manualHours, hourlyCost]);

  return (
    <div className={styles.dashboard}>
      <div className={styles.inputPanel}>
        <div className={styles.field}>
          <label htmlFor="leads">
            <span>Monthly Leads</span>
            <span className={styles.fieldValue}>{monthlyLeads}</span>
          </label>
          <input id="leads" type="range" min={10} max={1000} step={10} value={monthlyLeads} onChange={(e) => setMonthlyLeads(Number(e.target.value))} />
        </div>

        <div className={styles.field}>
          <label htmlFor="value">
            <span>Average Customer Value</span>
            <span className={styles.fieldValue}>${avgValue}</span>
          </label>
          <input id="value" type="range" min={50} max={5000} step={50} value={avgValue} onChange={(e) => setAvgValue(Number(e.target.value))} />
        </div>

        <div className={styles.field}>
          <label htmlFor="response">
            <span>Current Response Time (hours)</span>
            <span className={styles.fieldValue}>{responseTime}h</span>
          </label>
          <input id="response" type="range" min={0} max={48} step={1} value={responseTime} onChange={(e) => setResponseTime(Number(e.target.value))} />
        </div>

        <div className={styles.field}>
          <label htmlFor="conversion">
            <span>Estimated Conversion Rate</span>
            <span className={styles.fieldValue}>{conversionRate}%</span>
          </label>
          <input id="conversion" type="range" min={1} max={80} step={1} value={conversionRate} onChange={(e) => setConversionRate(Number(e.target.value))} />
        </div>

        <div className={styles.field}>
          <label htmlFor="missed">
            <span>Missed Lead Percentage</span>
            <span className={styles.fieldValue}>{missedPercent}%</span>
          </label>
          <input id="missed" type="range" min={0} max={80} step={1} value={missedPercent} onChange={(e) => setMissedPercent(Number(e.target.value))} />
        </div>

        <div className={styles.field}>
          <label htmlFor="hourly">
            <span>Employee Hourly Cost</span>
            <span className={styles.fieldValue}>${hourlyCost}/hr</span>
          </label>
          <input id="hourly" type="range" min={10} max={100} step={1} value={hourlyCost} onChange={(e) => setHourlyCost(Number(e.target.value))} />
        </div>

        <div className={styles.field}>
          <label htmlFor="manual">
            <span>Hours on Manual Work (per week)</span>
            <span className={styles.fieldValue}>{manualHours}h</span>
          </label>
          <input id="manual" type="range" min={0} max={60} step={1} value={manualHours} onChange={(e) => setManualHours(Number(e.target.value))} />
        </div>
      </div>

      <div className={styles.outputPanel}>
        <span className={`${styles.outputLabel} mono`}>ESTIMATED MONTHLY IMPACT</span>
        <div className={styles.outputGrid}>
          <div className={styles.outputItem}>
            <span className={`${styles.outputValue} mono`}>{results.recoveredLeads}</span>
            <span className={styles.outputSub}>Potential leads recovered</span>
          </div>
          <div className={styles.outputItem}>
            <span className={`${styles.outputValue} mono`}>{results.recoveredAppointments}</span>
            <span className={styles.outputSub}>Potential appointments</span>
          </div>
          <div className={styles.outputItem}>
            <span className={`${styles.outputValue} mono`}>${results.revenueOpportunity.toLocaleString()}</span>
            <span className={styles.outputSub}>Estimated revenue opportunity</span>
          </div>
          <div className={styles.outputItem}>
            <span className={`${styles.outputValue} mono`}>{results.hoursSavedMonthly}</span>
            <span className={styles.outputSub}>Hours saved per month</span>
          </div>
          <div className={styles.outputItem}>
            <span className={`${styles.outputValue} mono`}>${results.monthlySavings.toLocaleString()}</span>
            <span className={styles.outputSub}>Potential monthly savings</span>
          </div>
          <div className={styles.outputItem}>
            <span className={`${styles.outputValue} mono`}>${results.annualSavings.toLocaleString()}</span>
            <span className={styles.outputSub}>Potential annual savings</span>
          </div>
          <div className={styles.outputItem}>
            <span className={`${styles.outputValue} mono`}>${results.estimatedInvestment.toLocaleString()}</span>
            <span className={styles.outputSub}>Estimated automation investment</span>
          </div>
          <div className={styles.outputItem}>
            <span className={`${styles.outputValue} mono`}>{results.paybackMonths} mo</span>
            <span className={styles.outputSub}>Estimated payback period</span>
          </div>
          <div className={styles.outputItem}>
            <span className={`${styles.outputValue} mono`}>{results.roiPercent}%</span>
            <span className={styles.outputSub}>Estimated annual ROI</span>
          </div>
        </div>
        <p className={styles.estimateNote}>
          These figures are estimates based on the inputs above and typical automation recovery rates. They are not a
          guarantee of results — your AI Audit will use your actual numbers.
        </p>
      </div>
    </div>
  );
}
