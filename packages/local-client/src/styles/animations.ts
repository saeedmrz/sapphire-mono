import { keyframes } from "@emotion/react";

export const headLeftCardAnim = keyframes`
    0% {
        transform:scale(0);
    }

    100% {
        transform:scale(1);
    }
`;

export const headRightCardAnim = keyframes`
    50% {
        transform-origin: bottom;
        transform:translateY(0);
    }
    70% {
        transform-origin: bottom;
        transform:translateY(0) scaleY(.7);
    }
    100% {
        transform-origin: bottom;
        transform:translateY(0) scale(1);
    }
`;

export const cellItemAnim = keyframes`
    100% {
        transform: scaleY(1);
    }
`;

export const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const rotate = keyframes`
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(360deg);
    }
`;
