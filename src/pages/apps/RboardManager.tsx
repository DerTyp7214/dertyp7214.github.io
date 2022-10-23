import frame1 from './rboardManagerAssets/Frame.png'
import frame2 from './rboardManagerAssets/Frame-1.png'
import frame3 from './rboardManagerAssets/Frame-2.png'
import frame4 from './rboardManagerAssets/Frame-3.png'
import icon from './rboardManagerAssets/Icon.png'
import AppTemplate from './AppTemplate'

const RboardManager = () => {
    return <AppTemplate
        title='Rboard Theme Manager V3'
        contentTitle='How to use Rboard Theme Manager'
        contentBody='Make sure you are using ROOTED android 6.0+\nDownload and install manager\nGrant root and choose option for module/gboard (gboard version is stored in data of gboard)\nGo to middle button with arrow down called download and pick theme packs you want to download then click fab button to install\n\nEnjoy'
        icon={icon}
        frames={[frame1, frame2, frame3, frame4]}
    />
}

export default RboardManager