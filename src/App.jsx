import { DatePicker } from 'antd';
import axiosInstance from './services/axios.service';

function App() {
  axiosInstance.get('auth/sign-in');
  return <DatePicker />;
}

export default App;
