/* eslint-disable @typescript-eslint/no-explicit-any */

export default function ChangeableButton({
  primaryButton,
  secondaryButton,
  isActive,
}: {
  primaryButton: any;
  secondaryButton: any;
  isActive: any;
}) {
  return (
    <div className="relative w-icon">
      <button
        type="button"
        aria-label={primaryButton.label}
        className={`${primaryButton.style} ${isActive ? 'opacity-0 scale-110' : 'scale-100'}`}
      >
        <primaryButton.icon size="20px" />
      </button>
      <button
        type="button"
        aria-label={secondaryButton.label}
        className={`${secondaryButton.style} ${isActive ? 'opacity-100 scale-100' : 'opacity-0 scale-110'}`}
      >
        <secondaryButton.icon size="20px" />
      </button>
    </div>
  );
}
