export const Environments = {
    Local: {
        name: 'Local',
        uiHost: 'localhost',
        uiBase: '/',
        apiHost: '',
        assetBase: '' ///we must have an assetBase since 216 has many images
    },

    Prod: {
        name: 'Production',
        uiHost: '',
        uiBase: '/',
        apiHost: '',
        assetBase: '' ////
    }
};

const currentHost = 
!!window
&& !!window.location
&& typeof window.location.hostname === 'string'
&& window.location.hostname.toLowerCase();

let Environment;

switch(currentHost){
    case Environments.Local.uiHost:
        Environment = Environments.Local;
        break;
    case Environments.Prod.apiHost:
        default:
            Environment = Environments.Prod;
            break;
};

export default Environment;