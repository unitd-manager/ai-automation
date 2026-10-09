import dynamic from "next/dynamic";
import type { ComponentProps } from "react";
import styles from "../DeferredWidget.module.css";

const FeatureExplorer = dynamic(() => import("./FeatureExplorer"), {
  loading: () => (
    <div className={styles.featuresLoading} role="status">
      <span className="visually-hidden">Loading interactive features</span>
      <span />
      <span />
      <span />
    </div>
  ),
});

export default function LazyFeatureExplorer(props: ComponentProps<typeof import("./FeatureExplorer").default>) {
  return <FeatureExplorer {...props} />;
}
