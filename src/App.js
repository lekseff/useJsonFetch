import useJsonFetch from './hooks/useJsonFetch';
import loader from './assets/loader.gif';

function App() {
  const [data, error, loading] = useJsonFetch('http://localhost:7070/', 'data');

  const response = error ? error : data;
  console.log(data, error, loading);

  return (
    <div>
      {loading && <img src={loader} alt='loader' />}
      {!loading && <div>{JSON.stringify(response, null, ' ')}</div>}
    </div>
  );
}

export default App;
