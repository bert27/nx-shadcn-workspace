interface IconSideNavBarProps {
  emoji: string;
  label: string;
}

export function IconSideNavBar({ emoji, label }: IconSideNavBarProps) {
  return (
    <span
      role="img"
      aria-label={label}
      style={{
        padding: '1rem',
        fontSize: '3rem',
      }}
    >
      {emoji}
    </span>
  );
}
