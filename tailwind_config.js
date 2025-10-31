tailwind.config = {
    theme: {
        colors: {
            primary: "var(--color-primary)",
            secondary: "var(--color-secondary)",
            accent: "var(--color-accent)",
            "bg": "var(--color-bg)",
            "accent-hover": "var(--color-accent-hover)",
            "color-background": "var(--color-background)",
            "color-success": "var(--color-success)",
            "text-muted": "var(--color-text-muted) ",
            "modal" : "--color-modal-overlay"

        },
        extend: {
            fontFamily: {
                custom: ["Inter", "sans-serif"],
            },
        },
    },
};