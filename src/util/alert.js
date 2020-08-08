import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
// 弹出提示框
export default function showToast(msg) {
  Toast.info(msg, 2);
}
