import frame1 from './rboardImeTesterAssets/Frame.png'
import frame2 from './rboardImeTesterAssets/Frame (1).png'
import frame3 from './rboardImeTesterAssets/Frame (2).png'
import icon from './rboardImeTesterAssets/Icon.png'
import AppTemplate from './AppTemplate'

const RboardManager = () => {
    return <AppTemplate
        title='Rboard IME Tester'
        contentTitle='How to use Rboard IME Tester'
        contentBody='TODO'
        icon={icon}
        frames={[frame1, frame2, frame3]}
    />
}

export default RboardManager