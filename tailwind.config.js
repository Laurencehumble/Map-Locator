/** @type {import('tailwindcss').Config} */
export default {
  prefix: 'tw-',
  content: ["./*.{html,js}"],
  theme: {
      extend: {
          screens: {
              'small_mobile': '200px',
              'extend_mobile': '375px',
              'big_mobile': '376px',
              'big_mobile_scroll': '468px',
              'big_mobile_scroll2': '467px',
              'tablet': '768px',
              'square': '1024px',
              'laptop': '1280px',
              'laptop-extend': '1281px',
              'desktop': '1536px',
              'wide-desktop': '1680px',
              'widest-desktop': '1904px',
          },
          colors: {
              'fc-900': '#730F01',
              'fc-800': '#991401',
              'fc-700': '#BF1901',
              'fc-600': '#CC432F',
              'fc-500': '#D96D5E',
              'fc-400': '#E5988C',
              'fc-300': '#ECADA3',
              'fc-200': '#F2C2BB',
              'fc-100': '#F9D7D2',
              'fc-50': '#FFECE9',
              'Linear-opacity': '#0F172A',
              'Linear-category': '#E2E8F0',
              'blue-gray-600': '#475569',
              salmon: '#fa8071',
              black: '#171717',
              primary: '#FF2626',
              light: '#FFE6E6',
          },
          fontFamily: {
              work_sans: ["Work Sans", "sans-serif"],
              outfit: ["Outfit", "sans-serif"],
          },
          fontSize: {
              xs: '12px',
              sm: '14px',
              base: '16px',
              lg: '18px',
              xl: '20px',
              '2xl': '24px',
              '3xl': '30px',
              '4xl': '36px',
              '5xl': '48px',
              '6xl': '60px',
              '7xl': '72px',
          },
          lineHeight: {
              3: '12px',
              4: '16px',
              5: '20px',
              6: '24px',
              7: '28px',
              8: '32px',
              9: '36px',
              10: '40px',
          },
          spacing: {
              '10vw': '10vw',
              '20vw': '20vw',
              '30vw': '30vw',
              '40vw': '40vw',
              '50vw': '50vw',
              '60vw': '60vw',
              '70vw': '70vw',
              '80vw': '80vw',
              '90vw': '90vw',
              '100vw': '100vw',
              '110vw': '110vw',
              '120vw': '120vw',
              '130vw': '130vw',
              '140vw': '140vw',
              '150vw': '150vw',
              '160vw': '160vw',
              '180vw': '180vw',
              m_xl: '200px',
              mobile_64px: '17vw',
              laptop_64px: '3.7vw',
              px: '1px',
              0: '0',
              '0.5': '2px',
              1: '4px',
              '1.5': '6px',
              2: '8px',
              '2.5': '10px',
              3: '12px',
              '3.5': '14px',
              4: '16px',
              '4.5': '18px',
              5: '20px',
              6: '24px',
              7: '28px',
              8: '32px',
              9: '36px',
              10: '40px',
              11: '44px',
              12: '48px',
              14: '56px',
              15: '50px',
              16: '64px',
              20: '80px',
              24: '96px',
              28: '112px',
              30: '120px',
              32: '128px',
              36: '144px',
              40: '160px',
              44: '176px',
              48: '192px',
              52: '208px',
              56: '224px',
              60: '240px',
              64: '256px',
              72: '288px',
              80: '320px',
              88: '341px',
              big_mobile_376px: '376px',
              96: '384px',
              105: '405px',
              112: '448px',
              128: '512px',
              136: '550px',
              144: '576px',
              160: '640px',
              176: '704px',
              tablet_768px: '768px',
              208: '832px',
              224: '896px',
              240: '960px',
              256: '1024px',
              square_1024px: '1024px',
              laptop_1280px: '1280px',
              desktop_1356px: '1356px',
          },
      },
  },
};
