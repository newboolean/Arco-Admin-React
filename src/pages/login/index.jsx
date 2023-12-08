/*
 * @Author: newboolean sunjiyan1228@163.com
 * @Date: 2023-11-26 22:18:44
 * @LastEditors: newboolean sunjiyan1228@163.com
 * @LastEditTime: 2023-12-08 20:56:14
 * @FilePath: \Arco-Admin-React\src\pages\Login.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Form, Input, Button, Checkbox } from '@arco-design/web-react';
import '@/pages/login/index.less'
const FormItem = Form.Item;

const Login = () => {
  return (
    <div className='login-box'>
      <Form style={{ width: 600 }} autoComplete='off'>
        <FormItem label='Username'>
          <Input placeholder='please enter your username...' />
        </FormItem>
        <FormItem label='Post'>
          <Input placeholder='please enter your post...' />
        </FormItem>
        <FormItem wrapperCol={{ offset: 5 }}>
          <Checkbox>I have read the manual</Checkbox>
        </FormItem>
        <FormItem wrapperCol={{ offset: 5 }}>
          <Button type='primary'>Submit</Button>
        </FormItem>
      </Form>
    </div>
  );
};

export default Login;