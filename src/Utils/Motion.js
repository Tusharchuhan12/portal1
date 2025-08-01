// src/utils/motion.js

export const textVariant = (delay = 0) => ({
    hidden: {
        y: 20,
        opacity: 0,
    },
    show: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            duration: 0.8,
            delay,
        },
    },
});

export const fadeIn = (direction = "up", type = "tween", delay = 0, duration = 0.6) => {
    let x = 0;
    let y = 0;

    switch (direction) {
        case "left":
            x = -100;
            break;
        case "right":
            x = 100;
            break;
        case "up":
            y = 100;
            break;
        case "down":
            y = -100;
            break;
        default:
            break;
    }

    return {
        hidden: {
            x,
            y,
            opacity: 0,
        },
        show: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: {
                type,
                delay,
                duration,
                ease: "easeOut",
            },
        },
    };
};

export const zoomIn = (delay = 0, duration = 0.6) => ({
    hidden: {
        scale: 0,
        opacity: 0,
    },
    show: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "tween",
            delay,
            duration,
            ease: "easeOut",
        },
    },
});

export const slideIn = (direction = "left", type = "tween", delay = 0, duration = 0.6) => {
    let x = 0;
    let y = 0;

    switch (direction) {
        case "left":
            x = "-100%";
            break;
        case "right":
            x = "100%";
            break;
        case "up":
            y = "100%";
            break;
        case "down":
            y = "-100%";
            break;
        default:
            break;
    }

    return {
        hidden: {
            x,
            y,
        },
        show: {
            x: 0,
            y: 0,
            transition: {
                type,
                delay,
                duration,
                ease: "easeOut",
            },
        },
    };
};

export const staggerContainer = (staggerChildren = 0.2, delayChildren = 0) => ({
    hidden: {},
    show: {
        transition: {
            staggerChildren,
            delayChildren,
        },
    },
});
