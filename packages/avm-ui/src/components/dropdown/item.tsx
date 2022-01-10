// import { mergeProps } from '../../utils/with-default-props'
// import { Popup } from '../popup/popup'
// import { Radio } from '../radio/radio'



export type DropdownItemProps = {
    key: string
    title: HTMLElement
    active?: boolean
    highlight?: boolean
    forceRender?: boolean
    destroyOnClose?: boolean
    closeOnContentClick?: boolean
    // onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

export class DropdownItem extends Component {

    render = props => {
        return (
            <div>{props.children}</div>
        )
    }
}