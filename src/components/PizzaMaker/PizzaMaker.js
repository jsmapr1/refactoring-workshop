import React, { useEffect, useState } from 'react';
import Options from '../Options/Options';
import Choices from '../Choices/Choices';
import Builder from '../Builder/Builder';
import { generateDisplayName } from '../Builder/utils';
import Modal from '../Modal/Modal';

export default function PizzaMaker() {
  const [marketingMessage, setMarketingMessage] = useState(null);
  const [options, setOptions] = useState([]);
  const [toppings, setToppings] = useState([]);
  const {
    addTopping, displayMarketingMessage, removeTopping, reset, init,
  } = Builder();

  useEffect(() => {
    return reset;
  }, [reset])

  useEffect(() => {
    let cancel = false;
    const update = (...args) => {
      if(cancel) {
        return;
      }
      setMarketingMessage(...args);
    }
    displayMarketingMessage(update, { time: 1000 });
    return () => {
      cancel = true;
    }
  }, [displayMarketingMessage]);

  useEffect(() => {
    const fetch = async () => {
      const fetchedOptions = await init();
      setOptions(fetchedOptions);
    };
    fetch();
  }, [init]);

  const update = (topping) => {
    addTopping(setMarketingMessage, topping)
      .then(toppingsUpdate => setToppings(toppingsUpdate));
  };

  const handleRemove = (topping) => {
    const toppingsList = removeTopping(topping);
    const toppingsUpdate = generateDisplayName(toppingsList);
    setToppings(toppingsUpdate);
  };

  return (
    <>
      <Modal
        open={!!marketingMessage}
        marketingMessage={marketingMessage}
        onClose={() => setMarketingMessage(null)}
      />
      <Options onClick={update} options={options} />
      <Choices toppings={toppings} onRemove={handleRemove} />
    </>
  );
}
