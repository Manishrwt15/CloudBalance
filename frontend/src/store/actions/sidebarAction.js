export const OPEN_SIDEBAR = "OPEN_SIDEBAR";
export const CLOSE_SIDEBAR = "CLOSE_SIDEBAR";
export const TOGGLE_SIDEBAR = "TOGGLE_SIDEBAR";

export const openSidebar = () => ({
    type : OPEN_SIDEBAR,
})

export const closeSidebar = () => ({
    type : CLOSE_SIDEBAR,
})

export const toggleSidebar = () => ({
    type : TOGGLE_SIDEBAR,
})

