import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
    return (
        <svg width="37" height="36" viewBox="0 0 37 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18.5" cy="18" r="18" fill="#FFD8CC"/>
            <path d="M30.5825 20.078C30.5456 20.933 30.5145 21.6249 30.1822 22.3983C29.6419 23.6557 28.6313 24.3573 28.1358 24.7012C27.646 25.0413 27.1971 25.2512 26.9425 25.3698C26.3304 25.6535 25.8659 25.7818 25.1644 25.978C24.4881 26.1665 23.8778 26.3317 23.048 26.4095C22.224 26.4853 21.4039 26.4483 20.5916 26.3026C19.2915 26.0694 18.3179 25.6399 17.7232 25.3678C17.0488 25.0588 16.5397 24.7459 16.1063 24.4836C15.9158 24.3689 15.5019 24.1143 14.7867 23.6188C13.2418 22.548 13.2748 22.4158 12.3789 21.8639C11.5646 21.3625 11.0574 21.0496 10.2762 20.865C9.98855 20.797 9.44829 20.7309 8.36972 20.6027C7.48743 20.4958 7.12985 20.4705 6.71008 20.1907C6.6168 20.1285 6.23201 19.8622 5.95605 19.3609C5.74228 18.9702 5.69369 18.6263 5.64899 18.1346C5.53434 16.8578 5.44494 16.2223 5.54017 15.4644C5.62179 14.8114 5.67232 14.3955 5.94439 13.9C6.24172 13.3597 6.63429 13.0332 6.99575 12.732C7.44856 12.355 7.8314 12.149 8.37749 11.8575C9.08682 11.4805 9.70287 11.2298 10.1285 11.0724C11.139 10.6992 11.9436 10.5321 12.478 10.4233C13.3156 10.2542 13.9628 10.1823 14.4505 10.1318C15.4319 10.0268 16.1763 10.0074 16.3803 10.0035C16.5999 9.99962 17.4686 9.98407 18.7007 10.0735C19.4372 10.1279 20.4342 10.2056 21.7129 10.4563C22.6613 10.6429 23.6544 10.8392 24.8981 11.3561C26.0097 11.8167 26.7949 12.3161 27.1738 12.5688C27.7316 12.9438 28.2854 13.3228 28.8723 13.9835C29.1444 14.2906 29.5447 14.7492 29.8712 15.4547C30.1919 16.1465 30.3201 16.817 30.3804 17.1299C30.4775 17.6332 30.5086 18.018 30.5397 18.4572C30.5708 18.9372 30.6078 19.4755 30.5825 20.078Z" fill="#EFC3AF" stroke="#724343" stroke-width="0.886676" stroke-miterlimit="10"/>
            <path d="M22.2089 25.9819C21.7521 25.9819 21.2582 25.9436 20.611 25.8339C19.8934 25.7127 19.0107 25.4036 18.8149 25.3251C18.8149 24.346 18.8245 23.367 18.8245 22.3879C19.9703 22.6592 21.0631 22.9784 22.2089 23.2497C22.2031 24.1386 22.2089 25.0681 22.2089 25.9819Z" fill="#F4EAE6"/>
            <path d="M18.4287 10.4389C18.8756 10.4622 19.3965 10.4914 20.0786 10.5769C20.1311 10.5827 20.6072 10.6429 21.1222 10.7343C22.2124 10.9286 23.5495 11.1677 25.1003 11.8614C25.3374 11.9683 26.2896 12.4036 27.3118 13.1324C27.6752 13.3909 27.957 13.6221 28.2252 13.8767C28.4565 14.0963 28.781 14.4111 29.1095 14.8989C29.364 15.2779 29.5059 15.5927 29.5487 15.6918C29.6458 15.9153 29.7061 16.098 29.7585 16.2671C29.8052 16.4109 29.9315 16.7782 29.9762 17.093C30.0617 17.6955 29.9607 18.1716 29.9004 18.4475C29.6555 19.563 29.0492 20.4065 28.8238 20.6708C27.7938 21.8698 26.4043 22.6569 24.7427 23.1194C24.0295 23.3176 23.2949 23.4459 22.5389 23.4517C21.0872 23.4634 19.7094 23.203 18.4073 22.618C17.3831 22.1594 16.5028 21.5511 15.6807 20.8729C15.0044 20.3171 14.3398 19.7515 13.6499 19.2074C12.9406 18.6458 12.1419 18.2007 11.1935 17.9792C10.6319 17.847 10.0547 17.7907 9.47943 17.7227C8.92751 17.6566 8.37559 17.5788 7.82756 17.4836C7.66821 17.4564 7.52245 17.4117 7.38642 17.3554C6.92389 17.1591 6.65182 16.8404 6.54688 16.714C6.45943 16.6091 5.90556 15.9192 5.98719 15.033C5.99302 14.9806 6.01634 14.7396 6.12322 14.4461C6.16792 14.3198 6.26898 14.073 6.49829 13.7601C6.67903 13.5133 6.95887 13.2024 7.53411 12.8001C7.641 12.7262 8.03356 12.4542 8.90613 12.0286C9.46777 11.7546 9.95944 11.5155 10.6571 11.2804C11.3606 11.0433 11.9028 10.9364 12.5422 10.8101C12.8395 10.7518 13.4925 10.6293 14.3437 10.5341C14.6235 10.503 15.6049 10.4 16.8992 10.3981C17.5755 10.3942 18.0944 10.4214 18.4287 10.4389ZM18.04 11.6943C16.6835 11.636 15.3329 11.6749 13.9919 11.8187C12.5636 11.9703 11.2129 12.3026 9.96722 12.8798C9.26566 13.2043 8.60297 13.5697 8.06077 14.0594C7.7576 14.3334 7.4933 14.6249 7.35338 14.9825C7.15321 15.4878 7.48164 16.1796 8.27454 16.3215C8.5058 16.3623 8.739 16.4012 8.97221 16.4284C9.63879 16.51 10.3093 16.5625 10.97 16.6694C12.0738 16.8462 13.0572 17.2426 13.922 17.8373C14.6605 18.3445 15.3368 18.9062 16.0247 19.4542C16.6058 19.9187 17.1946 20.3754 17.869 20.7504C18.8115 21.2732 19.826 21.658 20.9648 21.7882C21.4895 21.8484 22.0181 21.8776 22.5447 21.8387C23.4484 21.7746 24.2977 21.5608 25.0964 21.2246C26.0933 20.8049 26.9348 20.2432 27.547 19.4756C27.8968 19.0364 28.13 18.5603 28.2136 18.0375C28.3379 17.2679 28.1281 16.5411 27.7025 15.8473C27.2749 15.1535 26.6841 14.5569 25.9748 14.0322C24.766 13.1363 23.3862 12.5047 21.8043 12.1666C20.5664 11.9023 19.3129 11.7507 18.04 11.6943Z" fill="#F4EAE6"/>
            <path d="M18.1839 11.702C18.9865 11.7253 20.3216 11.8225 21.9987 12.18C23.604 12.5221 25.0012 13.1595 26.2275 14.0651C26.9466 14.5957 27.5451 15.1962 27.9785 15.8977C28.2836 16.3913 28.3769 16.7684 28.408 16.8927C28.5673 17.5107 28.511 17.9985 28.4974 18.1093C28.443 18.5407 28.3089 18.8517 28.2389 19.013C28.0562 19.4288 27.8386 19.7028 27.7025 19.8719C27.5937 20.008 27.3586 20.282 27.001 20.5638C26.6609 20.8319 26.3733 20.9758 26.0837 21.1235C25.9302 21.2012 25.5415 21.3916 25.0071 21.5646C24.8555 21.6132 24.358 21.7706 23.6759 21.8717C23.5457 21.8911 23.1997 21.9397 22.7411 21.9611C22.5215 21.9708 21.8744 21.9921 21.1495 21.8989C20.7511 21.8483 19.4685 21.6559 18.0109 20.8514C17.3249 20.4724 16.7302 20.0099 16.1414 19.5415C15.4437 18.9857 14.7577 18.4202 14.0095 17.9072C13.1331 17.3067 12.1361 16.9063 11.0167 16.7275C10.3482 16.6207 9.66802 16.5662 8.99172 16.4846C8.75463 16.4555 8.51754 16.4185 8.28434 16.3758C7.48172 16.232 7.14746 15.5343 7.34957 15.0232C7.47201 14.7123 7.61582 14.4868 8.06668 14.0923C8.70799 13.5307 9.3357 13.2431 9.92066 12.9788C10.4978 12.7203 10.9837 12.5551 11.3005 12.4579C12.0059 12.2403 12.5481 12.147 13.1661 12.0401C13.3838 12.0032 13.9687 11.9041 14.7422 11.8264C15.4262 11.7583 15.9432 11.737 16.3202 11.7214C16.5806 11.7078 17.3735 11.6767 18.1839 11.702Z" fill="url(#paint0_linear)" stroke="#8E1E1C" stroke-width="0.608737" stroke-miterlimit="10"/>
            <path d="M23.8358 19.29C24.7907 19.1957 25.5136 18.6005 25.4504 17.9607C25.3872 17.3209 24.5619 16.8787 23.607 16.973C22.652 17.0673 21.9292 17.6625 21.9924 18.3023C22.0556 18.9421 22.8809 19.3843 23.8358 19.29Z" fill="#F4EAE6"/>
            <defs>
                <linearGradient id="paint0_linear" x1="7.5541" y1="17.9968" x2="28.3531" y2="15.9316" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#E09C79"/>
                    <stop offset="0.2675" stop-color="#ED8782"/>
                    <stop offset="0.8254" stop-color="#C83E3D"/>
                </linearGradient>
            </defs>
        </svg>

    );
};

export default Icon;
