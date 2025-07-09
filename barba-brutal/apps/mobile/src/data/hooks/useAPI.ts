import useSection from "./useSection";

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function useAPI(){
    const { token } = useSection()
    const urlBase = process.env.API_URL;

   async function httpGet(url:string){
        const path = url.startsWith('/') ? url : `/${url}`;
        const urlComplete = `${urlBase}${path}`;

        const response = await fetch(urlComplete,{
            headers:{
                Authorization:`Bearer ${token}`,
            }
        });
        
        return extractDates(response)
    }
   async function httpPost(url:string, body: any){
        const path = url.startsWith('/') ? url : `/${url}`;
        const urlComplete = `${urlBase}${path}`;
      
        const response = await fetch(urlComplete,{
            method: 'POST',
            headers:{'Content-Type':'application/json',
                Authorization:`Bearer ${token}`
            },
            body: JSON.stringify(body),
        });
        
        return extractDates(response)
    }
    async function extractDates(response: Response){
       let content=''
        try{
            content = await response.text()
            return JSON.parse(content)
        } catch{
            return content
        }
    }
    return { httpGet, httpPost }
}