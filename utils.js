// global registry

// patch helper
export function patchGSAP(gsap) {
    const GSAPRegistry = {
        all: [],
        finished: []
    };
    const methods = ["to", "from", "fromTo", "timeline"];

    methods.forEach(method => {
        const original = gsap[method];

        gsap[method] = function (...args) {
            const anim = original.apply(this, args);

            // track all animations
            GSAPRegistry.all.push(anim);
            console.log({ anim })

            // add onComplete hook for finished ones
            if (anim.eventCallback) {
                const existing = anim.eventCallback("onComplete");
                anim.eventCallback("onComplete", () => {
                    GSAPRegistry.finished.push(anim);
                    if (existing) existing.call(anim);
                });
            }

            return anim;
        };
    });


    return GSAPRegistry
}