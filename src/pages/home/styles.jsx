import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  place-content: center;

  width: 100%;
  height: 100vh;
`;

export const Swapper = styled.div`
  width: 630px;
  height: 490px;

  display: flex;
  flex-direction: column;

  gap: 76px;
`;

export const Header = styled.div`
  display: flex;
  gap: 10px;
`;

export const DivImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 63px;
  height: 63px;

  border-radius: 100%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const DivHello = styled.div`
  span {
    font-size: 24px;
    font-style: normal;
    font-weight: 300;
    line-height: 120%;
  }

  h1 {
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 120%;
  }
`;

export const DivGoal = styled.div`
  display: flex;
  gap: 102px;

  .modal {
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    background-color: rgba(0, 0, 0, 0.8);
    z-index: 999;
  }

  .modal-content {
    width: 299px;
    height: 254px;

    border-radius: 23px;

    background: var(--base-gray-400, #1d1b26);
    box-shadow: 17px 25px 57px 0px rgba(17, 16, 24, 0.25);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 0px 51px;
    gap: 24px;

    position: relative;

    button {
      position: absolute;
      right: 12.5px;
      top: 14px;

      display: flex;
      justify-content: center;
      align-items: center;

      padding: 5px;
      gap: 10px;

      background: #322f40;
      border: 0;
      border-radius: 100%;

      transition: all 0.3s;

      &:hover {
        background: #282533;
      }
    }

    h1 {
      color: var(--produto-blue, #7fc4ed);
      text-align: center;

      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: 120%;
      letter-spacing: 0.72px;
    }
  }
`;

export const DivDrink = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 208px;
  height: 350px;

  padding: 32px 40px;
  gap: 40px;

  border-radius: 20px;
  background: var(--produto-blue, #7fc4ed);

  span {
    color: #1f2128;

    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 100%;
    letter-spacing: 0.36px;
  }
`;

export const Drink = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 32px;

  div {
    text-align: center;
    display: flex;
    flex-direction: column;

    gap: 9px;

    h1 {
      color: #1f2128;

      text-align: center;
      font-size: 20px;
      font-style: normal;
      font-weight: 600;
      line-height: 100%;
    }

    span {
      color: #1f2128;

      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
      letter-spacing: 0.48px;
    }
  }
`;

export const DivGoalDiary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 350px;
`;

export const CustomRange = styled.input`
  .range-input {
    -webkit-appearance: none;
    appearance: none;
    width: 320px;
    cursor: pointer;
    outline: none;
    border-radius: 15px;
    height: 6px;
    background: #322f40;
  }

  .range-input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 15px;
    width: 15px;
    background-color: #7fc4ed;
    border-radius: 50%;
    border: none;
    transition: 0.2s ease-in-out;
  }

  .range-input::-moz-range-thumb {
    height: 15px;
    width: 15px;
    background-color: #7fc4ed;
    border-radius: 50%;
    border: none;
    transition: 0.2s ease-in-out;
  }

  .range-input::-webkit-slider-thumb:hover {
    box-shadow: 0 0 0 6px rgba(127, 196, 237, 0.1);
  }
  .range-input:active::-webkit-slider-thumb {
    box-shadow: 0 0 0 7px rgba(127, 196, 237, 0.2);
  }
  .range-input:focus::-webkit-slider-thumb {
    box-shadow: 0 0 0 7px rgba(127, 196, 237, 0.2);
  }

  .range-input::-moz-range-thumb:hover {
    box-shadow: 0 0 0 6px rgba(127, 196, 237, 0.1);
  }
  .range-input:active::-moz-range-thumb {
    box-shadow: 0 0 0 7px rgba(127, 196, 237, 0.2);
  }
  .range-input:focus::-moz-range-thumb {
    box-shadow: 0 0 0 7px rgba(127, 196, 237, 0.2);
  }
`;

export const DailyGoal = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 9px;

  .range-input {
    -webkit-appearance: none;
    appearance: none;
    width: 320px;
    cursor: pointer;
    outline: none;
    border-radius: 15px;
    height: 6px;
    background: #322f40;
  }

  .range-input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    height: 15px;
    width: 15px;
    background-color: #7fc4ed;
    border-radius: 50%;
    border: none;
    transition: 0.2s ease-in-out;
  }

  .range-input::-moz-range-thumb {
    height: 15px;
    width: 15px;
    background-color: #7fc4ed;
    border-radius: 50%;
    border: none;
    transition: 0.2s ease-in-out;
  }

  .range-input::-webkit-slider-thumb:hover {
    box-shadow: 0 0 0 6px rgba(127, 196, 237, 0.1);
  }

  .range-input::-moz-range-thumb:hover {
    box-shadow: 0 0 0 6px rgba(127, 196, 237, 0.1);
  }
`;

export const Daily = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  span {
    color: #7fc4ed;

    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 0.48px;
  }

  p {
    color: #4e4964;

    text-align: right;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 0.36px;
  }
`;

export const QuantifyTimer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 9px;

  input[type="range"] {
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  width: 320px;
  cursor: pointer;
  outline: none;
  border-radius: 15px;
  height: 6px;
  background: #322F40;
}

/* Thumb: webkit */
input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none; 
  height: 18px;
  width: 18px;
  background-color: #7FC4ED;
  border-radius: 50%;
  border: none;
  transition: .2s ease-in-out;
}

/* Thumb: Firefox */
input[type="range"]::-moz-range-thumb {
  height: 15px;
  width: 15px;
  background-color: #7FC4ED;
  border-radius: 50%;
  border: none;
  transition: .2s ease-in-out;
}

/* Hover, active & focus Thumb: Webkit */

input[type="range"]::-webkit-slider-thumb:hover {
  box-shadow: 0 0 0 10px rgba(127, 196, 237, .1)
}
input[type="range"]:active::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(127, 196, 237, .2)
}
input[type="range"]:focus::-webkit-slider-thumb {
  box-shadow: 0 0 0 13px rgba(127, 196, 237, .2)
}

/* Hover, active & focus Thumb: Firfox */

input[type="range"]::-moz-range-thumb:hover {
  box-shadow: 0 0 0 10px rgba(127, 196, 237, .1)
}
input[type="range"]:active::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(127, 196, 237, .2)
}
input[type="range"]:focus::-moz-range-thumb {
  box-shadow: 0 0 0 13px rgba(127, 196, 237, .2)    
}

`;

export const Quantify = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;

  span {
    color: #7fc4ed;

    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 0.48px;
  }

  p {
    color: #4e4964;

    text-align: right;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
    letter-spacing: 0.36px;
  }
`;
export const DivTimer = styled.div`
  display: flex;
  align-items: center;

  gap: 13px;

  p {
    color: #fff;

    text-align: center;
    font-size: 32.305px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    letter-spacing: 0.969px;
  }
`;

export const DivHour = styled.div`
  display: flex;
  align-items: center;

  gap: 4px;

  color: var(--base-gray-200, #322f40);
  text-align: center;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0.48px;
`;

export const Second = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 64px;
  height: 64px;

  padding: 12px 0px;
  gap: 8px;

  border-radius: 10px;
  border: 1px solid var(--base-gray-200, #322f40);
  background: var(--base-gray-400, #1d1b26);

  color: var(--base-gray-100, #fbf9fe);
  text-align: center;

  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0.96px;
`;

export const DivMin = styled.div`
  display: flex;
  gap: 4px;

  color: var(--base-gray-200, #322f40);
  text-align: center;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0.48px;
  align-items: center;
`;

export const Min = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 64px;
  height: 64px;

  padding: 12px 0px;
  gap: 8px;

  border-radius: 10px;
  border: 1px solid var(--base-gray-200, #322f40);
  background: var(--base-gray-400, #1d1b26);

  color: var(--base-gray-100, #fbf9fe);
  text-align: center;

  font-size: 32px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: 0.96px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 320px;

  padding: 16px;
  gap: 8px;

  border-radius: 6px;
  background: var(--produto-blue, #7fc4ed);
  border: 0;

  color: var(--base-gray-500, #0f0e13);
  text-align: center;

  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: 0.48px;
  transition: all 0.3s;

  &:hover {
    background: var(--produto-blue-dark, #659aba);
  }
`;
