import { useState } from 'react';

export function CouponScreen() {
    const [couponCode, setCouponCode] = useState('XKT9B');
    const [isCopied, setIsCopied] = useState(false);

    function handleCopyBtn() {
        navigator.clipboard.writeText(couponCode);
        setIsCopied(true);
    }

    if(isCopied) {
        setTimeout(() => {
            setIsCopied(false);
        },4000);
    }

    return(
        <div style={{ width:'100%', height:'100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', gap:'20px' }}>
            <h1>redeem your coupon</h1>
            <p>{couponCode}</p>
            <button onClick={handleCopyBtn} style={{ cursor: 'pointer', padding: '5px 10px' }}>Copy</button>
            {isCopied && <p style={{ fontStyle: 'italic', marginTop: '-12px', fontSize: '18px', letterSpacing: '1px' }}>Copied to clipboard</p>}
        </div>
    );
}