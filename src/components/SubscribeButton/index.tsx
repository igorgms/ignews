import styles from "./styles.module.scss";

interface SuubscribeButtonsProps {
  priceId: string;
}

export function SubscribeButton({ priceId }: SuubscribeButtonsProps) {
  return (
    <button type='button' className={styles.subscribeButton}>
      Subscribe now
    </button>
  );
}
