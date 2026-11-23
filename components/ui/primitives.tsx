import type { ComponentPropsWithoutRef, ReactNode } from "react";

const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(" ");

/** The rounded tile every section is built from. */
export function Card({
  as: Tag = "div",
  className,
  ...rest
}: { as?: "div" | "section" | "article" } & ComponentPropsWithoutRef<"div">) {
  return (
    <Tag
      className={cx(
        "flex flex-col gap-3 rounded-[24px] border border-card-border p-7",
        // a tile that sets its own background (bg-feature, bg-accent) replaces bg-card
        !/(^|\s)bg-/.test(className ?? "") && "bg-card",
        className,
      )}
      {...rest}
    />
  );
}

/** Small uppercase label used at the top of tiles. */
export function Label({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cx("m-0 text-[13px] font-bold uppercase tracking-label text-ink-muted", className)}>
      {children}
    </p>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full bg-chip px-3 py-[5px] text-[13px] font-medium text-ink-soft">
      {children}
    </span>
  );
}

export function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((t) => (
        <Tag key={t}>{t}</Tag>
      ))}
    </div>
  );
}

type Variant = "accent" | "invert" | "light" | "subtle";

const variants: Record<Variant, string> = {
  accent: "bg-accent text-accent-ink",
  invert: "bg-invert text-invert-ink",
  light: "bg-light text-light-ink",
  subtle: "bg-chip text-ink",
};

/** Pill-shaped link button (min 44px tall for touch). */
export function ButtonLink({
  variant = "accent",
  className,
  children,
  ...rest
}: { variant?: Variant } & ComponentPropsWithoutRef<"a">) {
  const external = typeof rest.href === "string" && /^https?:/.test(rest.href);
  return (
    <a
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...rest}
      className={cx(
        "inline-flex min-h-[44px] items-center gap-2 rounded-full px-5 text-[15px] font-semibold no-underline",
        variants[variant],
        className,
      )}
    >
      {children}
    </a>
  );
}

export function SectionTitle({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={cx("m-0 text-[26px] font-extrabold tracking-[-0.02em] text-ink", className)}>
      {children}
    </h2>
  );
}

export { cx };
