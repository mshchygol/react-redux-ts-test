import { useEffect, useState } from "react";

interface UseFetchOptions extends RequestInit {
    mockData?: unknown
}

export function useFetch<T = unknown>(url: string, options?: UseFetchOptions) {
    const [data, setData] = useState<T | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        if (!url) return

        const controller = new AbortController()
        const signal = controller.signal

        setLoading(true)
        setError(null)

        fetch(url, { ...options, signal })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`)
                }
                console.log('got response')
                return res.json() as Promise<T>;
            })
            .then((responseData) => {
                if (options?.mockData !== undefined) {
                    setData(options.mockData as T)
                } else {
                    setData(responseData)
                }
            })
            .catch((err) => {
                if (err.name !== "AbortError") {
                    setError(err.message)
                }
            })
            .finally(() => {
                setLoading(false);
            })

        return () => controller.abort()
    }, [url])

    return { data, error, loading }
}
