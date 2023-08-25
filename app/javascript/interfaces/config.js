const config = {
    apis : {
        baseUrl: '/api/',
        login: 'login',
        register: 'register',
        users: 'users',
    },
    routes: {
        LOGIN: '/login',
        FORGOT_PASSWORD: '/forgot-password',
        RESETPASSWORD: '/reset-password',
        SIGNUP: '/register',
        HOME: '/',
        DASHBOARD: '/dashboard',
        USERS: '/users',
        PAYMENTS: '/payments',
        SETTINGS: '/settings',
    },
    menus: [
        {
          name: 'Dashboard',
          route: '/dashboard',
          slug: 'dashboard',
        },
        {
          name: 'Users',
          route: '/users',
          slug: 'users',
        },
        {
          name: 'Payments',
          route: '/payments',
          slug: 'payments',
        },
        {
          name: 'Settings',
          route: '/settings',
          slug: 'settings',
        }, 
    ],
    colors: {
        transparent: 'transparent',
        whiteColor: '#ffffff',
        primaryColor: '#4572BD',
        secondaryColor: '#8F2E8D',
        selectedColor: '#9C4D9F',
        primaryTextColor: '#3B3870',
        greyTextColor: '#7F7F96',
        blueTextColor: "#0071D9",
        greenTextColor: "#50BD73",
        primaryButtonColor: '#1C8CF3',
        lightPinkColor: '#FFE2E2',
        lightGreenColor: '#D3FCD2',
        lightBlueColor: '#DCF2FF',
        borderColor: "#D5DBE5",
        secondBorderColor: "#dddddd",
        purpleColor: "#574DCE",
        greyButtonColor: "#EEF5FF",
    
        primaryBackgroundColor: '#f5f5f5',
        
    },
    width: {
        drawerWidth: "287px"
    }
};

export default config