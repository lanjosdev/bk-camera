import { useNavigate, useLocation } from "react-router-dom";

export function ResultScreen() {
    const navigate = useNavigate();
    const location = useLocation();

    const data = location.state;
    data && console.log(data);

    const randomNumber = Math.floor(Math.random() * 100 + 1);

    function handleNextPage() {
        navigate('/coupon');
    }

    return(
        <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
            <h1>Result Screen</h1>
            <div style={{ width:'90%', height:'55vh', position: 'relative', display: "flex", flexDirection:'column', alignItems:'center' }} >
                {data && <img src={data} alt="image taked" style={{ width: 'auto', height:'100%', margin:'0 auto' }} />}
                {data && <p style={{ fontSize: '30px', fontWeight:'bold', fontFamily: 'sans-serif' }}>{randomNumber}%</p>}
                {data && <button onClick={handleNextPage} style={{ width: '100px', padding: '5px 0', cursor: 'pointer' }}>Next</button>}
            </div>
        </div>
    );
}