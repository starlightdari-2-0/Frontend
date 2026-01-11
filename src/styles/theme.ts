const size = {
    mobile: '480px',
    tablet: '768px',
    desktop: '1024px',
};

export const theme = {
    // 반응형 브레이크포인트
    device: {
        mobile: `(max-width: ${size.mobile})`,
        tablet: `(min-width: ${size.tablet}) and (max-width: ${size.desktop})`,
        desktop: `(min-width: ${size.desktop})`,
    },
    // 공통 색상 (필요시 추가)
    //   colors: {
    //     primary: '#AFCBFB',
    //     secondary: '#8fb8ff',
    //     background: '#1F2027',
    //     gray: '#3C424B',
    //   },
};