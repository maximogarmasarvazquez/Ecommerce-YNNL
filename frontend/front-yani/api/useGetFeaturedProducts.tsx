import { useEffect, useState } from "react";

export function useGetFeaturedProducts() {
    const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/products?filters[isFeatured][$eq]=true&populate=*`;
    const [result, setResult] = useState(null)
    const [loading, setloading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        (
            async () => {
                try {
                    const response = await fetch(url)
                    const json = await response.json()
                    setResult(json.data)
                    setloading(false)
                } catch (error: any) {
                    setError(error)
                    setloading(false)
                }
            })
        ()
    }, [url])
    return { result, loading, error };
}