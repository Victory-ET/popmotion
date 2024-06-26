'use client';

// components/SvgAnimation.js
// import { useEffect } from 'react';
// import * as d3 from 'd3';
// import * as flubber from 'flubber';

// const SvgAnimation = () => {
//     useEffect(() => {
//         const paths = Array.from(document.querySelectorAll("svg > g > path"));

//         if (paths.length === 0) return; // Ensure paths are found before proceeding

//         const animate = (sel) => {
//             const start = paths.shift();
//             const end = paths[0];

//             paths.push(start);

//             const startShape = start.getAttribute("d");
//             const endShape = end.getAttribute("d");

//             sel
//                 .datum({ start: startShape, end: endShape })
//                 .transition()
//                 .duration(1500)
//                 .attrTween("d", function (d) {
//                     return flubber.interpolate(d.start, d.end, { maxSegmentLength: 0.1 })
//                 })
//                 .on("end", function () {
//                     sel.call(animate);
//                 });
//         };

//         d3.select("svg > g > path")
//             .style("display", "block")
//             .call(animate);
//     }, []);

//     return (
//         <svg xmlns="http://www.w3.org/2000/svg" width="960" height="500">
//             <g transform="translate(240 10) scale(20 20)">
//                 <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
//                 <path className=' hidden' d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
//                 <path className=' hidden' d="M23 5.5V20c0 2.2-1.8 4-4 4h-7.3c-1.08 0-2.1-.43-2.85-1.19L1 14.83s1.26-1.23 1.3-1.25c.22-.19.49-.29.79-.29.22 0 .42.06.6.16.04.01 4.31 2.46 4.31 2.46V4c0-.83.67-1.5 1.5-1.5S11 3.17 11 4v7h1V1.5c0-.83.67-1.5 1.5-1.5S15 .67 15 1.5V11h1V2.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5V11h1V5.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5z" />
//                 <path className=' hidden' d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
//                 <path className=' hidden' d="M7 2v11h3v9l7-12h-4l4-8z" />
//                 <path className=' hidden' d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
//             </g>
//         </svg>
//     );
// };

// export default SvgAnimation;

// components/SvgAnimation.js
import { useEffect } from 'react';
import * as d3 from 'd3';
import * as flubber from 'flubber';
import { styler, tween } from 'popmotion';

const SvgAnimation = () => {
    useEffect(() => {
        const paths = Array.from(document.querySelectorAll("svg > g > path"));

        if (paths.length === 0) return; // Ensure paths are found before proceeding

        const animate = (sel: any) => {
            const start = paths.shift();
            const end = paths[0];

            paths.push(start);

            const startShape = start.getAttribute("d");
            const endShape = end.getAttribute("d");

            const pathStyler = styler(sel.node());
            const morph = flubber.interpolate(startShape, endShape, { maxSegmentLength: 0.1 });

            tween({
                from: 0,
                to: 1,
                duration: 1500,
            }).pipe(morph).start((v: any) => pathStyler.set('d', v));
        };

        d3.select("svg > g > path")
            .style("display", "block")
            .call(animate);
    }, []);

    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="960" height="500">
            <g transform="translate(240 10) scale(20 20)">
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill='red' />
                <path className='hidden' d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />              
            </g>
        </svg>
    );
};

export default SvgAnimation;


