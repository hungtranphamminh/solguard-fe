export const LocationFormatter = (location) => {
    var formmatedLocation = location.replaceAll('"','')
    formmatedLocation = formmatedLocation.replace(/([^:]*):/, "$1.sol:");
    return '/'+formmatedLocation
}