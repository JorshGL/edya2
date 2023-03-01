import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url, body, method) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null
  });


  const getData = async () => {
    try {
      const data = await fetch(url, {
        body: body? JSON.stringify(body) : null,
        method: method? method : body? 'POST' : 'GET'
      });
      setState({
        data: await data.json(),
        isLoading: false,
        error: false
      })
    } catch (error) {
      setState({
        data: null,
        isLoading: false,
        error: error.message
      })
    }

  }

  useEffect(() => {
    setState({
      ...state,
      isLoading: true
    })
    getData()
  }, [url])

  return state;
}

export default useFetch
