
import commoncss from '../../components/avm-ui/avm-ui.css';

avm.define('api-test', class extends Component {
    css(){
        return commoncss;
    }
    
    render() {
        return (
            <view class='header'>
                <text>Hello APP</text>
            </view>
        );
    }
});
avm.render(<app-index />);