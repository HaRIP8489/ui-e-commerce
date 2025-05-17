import React from 'react';

type QuantityControlProps = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
};

const QuantityControl: React.FC<QuantityControlProps> = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <button
        onClick={onDecrease}
        disabled={quantity <= 1}
        style={{ padding: '4px 8px', fontSize: '16px', cursor: 'pointer' }}
      >
        –
      </button>
      <span style={{ minWidth: '24px', textAlign: 'center' }}>{quantity}</span>
      <button
        onClick={onIncrease}
        style={{ padding: '4px 8px', fontSize: '16px', cursor: 'pointer' }}
      >
        +
      </button>
    </div>
  );
};

export default QuantityControl;
