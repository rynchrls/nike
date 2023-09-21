import { gsap } from "gsap";

export const scrollAnimation = (position, target, isMobile, onUpdate) => {
    const tl = gsap.timeline()

    tl.to(position, {
        x: !isMobile ?-5.89 : -9.42,
        y: !isMobile ? 4.49 : 9.76,
        z: !isMobile ? 4.87 : 8.29,
        scrollTrigger: {
            trigger: '.body',
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        },
        onUpdate
    })
    .to(target, {
        x: !isMobile ? 0.14 : 0.26,
        y: !isMobile ? 0.07 : -0.42,
        z: !isMobile ? 1.66 : 2.10,
        scrollTrigger: {
            trigger: '.body',
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        }
    })
    .to(position, {
        x: !isMobile ? -7.34 : -14.85,
        y: !isMobile ? -0.29 : 1.39,
        z: !isMobile ? -0.55 : -0.33,
        scrollTrigger: {
            trigger: '.body2',
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        },
        onUpdate
    })
    .to(target, {
        x: !isMobile ? -0.00 : 0.45,
        y: !isMobile ? 0.10 : 0.29,
        z: !isMobile ? -0.02 : 0.04,
        scrollTrigger: {
            trigger: '.body2',
            start: 'top bottom',
            end: 'top top',
            scrub: 2,
            immediateRender: false
        },
        onUpdate
    })

}