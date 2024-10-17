import {useEffect , useState} from 'react';

export function useGetProductBySlug( slug : string | string[] | undefined) {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[slug][$eq]=${slug}&populate=*`
    const [ result , setResult ] = useState(null);
    const [ loading , setLoading ] = useState(true);
    const [ error , setError ] = useState('');
  
    useEffect(() => {
      (async () => {
        try {
          const response = await fetch(url)
          const data = await response.json()
          setResult(data.data)
          setLoading(false)
        } catch (error: any) {
          setError(error)
          setLoading(false);
        } 
      })()
  }, [url]);
  
      return { result, loading, error }
}