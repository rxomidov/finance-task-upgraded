export const container = {
    hidden: {opacity: 0, scale: 0.9},
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 1
        }
    }
};

export const fadeIn = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.6
        }
    }
};

export const variants = {
    visible: {
        height: "fit-content",
        opacity: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.3,
        }
    },
    hidden: {
        // height: 0,
        opacity: 0,
    }
};