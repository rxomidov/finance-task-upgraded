import React from "react";

interface Icons {
    fill?: string,
        size?: string,
}

export const FilterIcon: React.FC<Icons> = ({fill}) => {
    return (
        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Stockholm-icons-/-Shopping-/-Sort1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                <rect id="Rectangle-8" fill={fill} x="4" y="5" width="16" height="3" rx="1.5"></rect>
                <path
                    d="M7.5,11 L16.5,11 C17.3284271,11 18,11.6715729 18,12.5 C18,13.3284271 17.3284271,14 16.5,14 L7.5,14 C6.67157288,14 6,13.3284271 6,12.5 C6,11.6715729 6.67157288,11 7.5,11 Z M10.5,17 L13.5,17 C14.3284271,17 15,17.6715729 15,18.5 C15,19.3284271 14.3284271,20 13.5,20 L10.5,20 C9.67157288,20 9,19.3284271 9,18.5 C9,17.6715729 9.67157288,17 10.5,17 Z"
                    id="Combined-Shape" fill={fill} opacity="0.3"></path>
            </g>
        </svg>
    )
};

export const FilterUpIcon: React.FC<Icons> = ({fill}) => {
    return (
        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Stockholm-icons-/-Navigation-/-Up-2" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                <rect id="Rectangle" fill={fill} opacity="0.3" x="11" y="10" width="2" height="10" rx="1"></rect>
                <path
                    d="M6.70710678,12.7071068 C6.31658249,13.0976311 5.68341751,13.0976311 5.29289322,12.7071068 C4.90236893,12.3165825 4.90236893,11.6834175 5.29289322,11.2928932 L11.2928932,5.29289322 C11.6714722,4.91431428 12.2810586,4.90106866 12.6757246,5.26284586 L18.6757246,10.7628459 C19.0828436,11.1360383 19.1103465,11.7686056 18.7371541,12.1757246 C18.3639617,12.5828436 17.7313944,12.6103465 17.3242754,12.2371541 L12.0300757,7.38413782 L6.70710678,12.7071068 Z"
                    id="Path-94" fill={fill} fillRule="nonzero"></path>
            </g>
        </svg>
    )
};

export const FilterDownIcon: React.FC<Icons> = ({fill}) => {
    return (
        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Stockholm-icons-/-Navigation-/-Down-2" stroke="none" strokeWidth="1" fill="none"
               fillRule="evenodd">
                <polygon id="Shape" points="0 0 24 0 24 24 0 24"></polygon>
                <rect id="Rectangle" fill={fill} opacity="0.3" x="11" y="4" width="2" height="10" rx="1"></rect>
                <path
                    d="M6.70710678,19.7071068 C6.31658249,20.0976311 5.68341751,20.0976311 5.29289322,19.7071068 C4.90236893,19.3165825 4.90236893,18.6834175 5.29289322,18.2928932 L11.2928932,12.2928932 C11.6714722,11.9143143 12.2810586,11.9010687 12.6757246,12.2628459 L18.6757246,17.7628459 C19.0828436,18.1360383 19.1103465,18.7686056 18.7371541,19.1757246 C18.3639617,19.5828436 17.7313944,19.6103465 17.3242754,19.2371541 L12.0300757,14.3841378 L6.70710678,19.7071068 Z"
                    id="Path-94" fill={fill} fillRule="nonzero"
                    transform="translate(12.000003, 15.999999) scale(1, -1) translate(-12.000003, -15.999999) "></path>
            </g>
        </svg>
    )
};

export const EditIcon: React.FC<Icons> = ({fill}) => {
    return (
        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <defs></defs>
            <g id="Stockholm-icons-/-Design-/-Edit" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                <path
                    d="M8,17.9148182 L8,5.96685884 C8,5.56391781 8.16211443,5.17792052 8.44982609,4.89581508 L10.965708,2.42895648 C11.5426798,1.86322723 12.4640974,1.85620921 13.0496196,2.41308426 L15.5337377,4.77566479 C15.8314604,5.0588212 16,5.45170806 16,5.86258077 L16,17.9148182 C16,18.7432453 15.3284271,19.4148182 14.5,19.4148182 L9.5,19.4148182 C8.67157288,19.4148182 8,18.7432453 8,17.9148182 Z"
                    id="Path-11" fill={fill} fillRule="nonzero"
                    transform="translate(12.000000, 10.707409) rotate(-135.000000) translate(-12.000000, -10.707409) "></path>
                <rect id="Rectangle" fill={fill} opacity="0.3" x="5" y="20" width="15" height="2" rx="1"></rect>
            </g>
        </svg>
    )
};

export const TrashIcon: React.FC<Icons> = ({fill}) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px"
             viewBox="0 0 24 24" version="1.1">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect x="0" y="0" width="24" height="24"></rect>
                <path
                    d="M6,8 L6,20.5 C6,21.3284271 6.67157288,22 7.5,22 L16.5,22 C17.3284271,22 18,21.3284271 18,20.5 L18,8 L6,8 Z"
                    fill={fill} fillRule="nonzero"></path>
                <path
                    d="M14,4.5 L14,4 C14,3.44771525 13.5522847,3 13,3 L11,3 C10.4477153,3 10,3.44771525 10,4 L10,4.5 L5.5,4.5 C5.22385763,4.5 5,4.72385763 5,5 L5,5.5 C5,5.77614237 5.22385763,6 5.5,6 L18.5,6 C18.7761424,6 19,5.77614237 19,5.5 L19,5 C19,4.72385763 18.7761424,4.5 18.5,4.5 L14,4.5 Z"
                    fill={fill} opacity="0.3"></path>
            </g>
        </svg>
    )
};

export const CancelIcon: React.FC<Icons> = ({fill}) => {
    return (
        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Stockholm-icons-/-Code-/-Error-circle" stroke="none" strokeWidth="1" fill="none"
               fillRule="evenodd">
                <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                <circle id="Oval-5" fill={fill} opacity="0.3" cx="12" cy="12" r="10"></circle>
                <path
                    d="M12.0355339,10.6213203 L14.863961,7.79289322 C15.2544853,7.40236893 15.8876503,7.40236893 16.2781746,7.79289322 C16.6686989,8.18341751 16.6686989,8.81658249 16.2781746,9.20710678 L13.4497475,12.0355339 L16.2781746,14.863961 C16.6686989,15.2544853 16.6686989,15.8876503 16.2781746,16.2781746 C15.8876503,16.6686989 15.2544853,16.6686989 14.863961,16.2781746 L12.0355339,13.4497475 L9.20710678,16.2781746 C8.81658249,16.6686989 8.18341751,16.6686989 7.79289322,16.2781746 C7.40236893,15.8876503 7.40236893,15.2544853 7.79289322,14.863961 L10.6213203,12.0355339 L7.79289322,9.20710678 C7.40236893,8.81658249 7.40236893,8.18341751 7.79289322,7.79289322 C8.18341751,7.40236893 8.81658249,7.40236893 9.20710678,7.79289322 L12.0355339,10.6213203 Z"
                    id="Combined-Shape" fill={fill}></path>
            </g>
        </svg>
    )
};

export const RefreshIcon: React.FC<Icons> = ({fill}) => {
    return (
        <svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
            <g id="Stockholm-icons-/-Media-/-Repeat" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <rect id="bound" x="0" y="0" width="24" height="24"></rect>
                <path
                    d="M12,8 L8,8 C5.790861,8 4,9.790861 4,12 L4,13 C4,14.6568542 5.34314575,16 7,16 L7,18 C4.23857625,18 2,15.7614237 2,13 L2,12 C2,8.6862915 4.6862915,6 8,6 L12,6 L12,4.72799742 C12,4.62015048 12.0348702,4.51519416 12.0994077,4.42878885 C12.264656,4.2075478 12.5779675,4.16215674 12.7992086,4.32740507 L15.656242,6.46136716 C15.6951359,6.49041758 15.7295917,6.52497737 15.7585249,6.56395854 C15.9231063,6.78569617 15.876772,7.09886961 15.6550344,7.263451 L12.798001,9.3840407 C12.7118152,9.44801079 12.607332,9.48254921 12.5,9.48254921 C12.2238576,9.48254921 12,9.25869158 12,8.98254921 L12,8 Z"
                    id="Combined-Shape" fill={fill}></path>
                <path
                    d="M12.0583175,16 L16,16 C18.209139,16 20,14.209139 20,12 L20,11 C20,9.34314575 18.6568542,8 17,8 L17,6 C19.7614237,6 22,8.23857625 22,11 L22,12 C22,15.3137085 19.3137085,18 16,18 L12.0583175,18 L12.0583175,18.9825492 C12.0583175,19.2586916 11.8344599,19.4825492 11.5583175,19.4825492 C11.4509855,19.4825492 11.3465023,19.4480108 11.2603165,19.3840407 L8.40328311,17.263451 C8.18154548,17.0988696 8.13521119,16.7856962 8.29979258,16.5639585 C8.32872576,16.5249774 8.36318164,16.4904176 8.40207551,16.4613672 L11.2591089,14.3274051 C11.48035,14.1621567 11.7936615,14.2075478 11.9589099,14.4287888 C12.0234473,14.5151942 12.0583175,14.6201505 12.0583175,14.7279974 L12.0583175,16 Z"
                    id="Combined-Shape" fill={fill} opacity="0.3"></path>
            </g>
        </svg>
    )
};