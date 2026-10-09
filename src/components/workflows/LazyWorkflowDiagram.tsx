import dynamic from "next/dynamic";
import type { ComponentProps } from "react";
import styles from "../DeferredWidget.module.css";

const WorkflowDiagram = dynamic(() => import("./WorkflowDiagram"), {
  loading: () => (
    <div className={styles.diagramLoading} role="status">
      <span className="visually-hidden">Loading workflow diagram</span>
      <span />
      <span />
      <span />
    </div>
  ),
});

export default function LazyWorkflowDiagram(props: ComponentProps<typeof import("./WorkflowDiagram").default>) {
  return <WorkflowDiagram {...props} />;
}
