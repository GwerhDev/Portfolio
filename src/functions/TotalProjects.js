export const totalDevProyects = (API) => {
    return API?.at(0)?.web.length + API?.at(1)?.desktop.length + API?.at(2)?.mobile.length + API?.at(3)?.software.length
}