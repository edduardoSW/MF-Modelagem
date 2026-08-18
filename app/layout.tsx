import type { Metadata } from "next";
import { headers } from "next/headers";
import { IBM_Plex_Mono, Outfit, Work_Sans } from "next/font/google";
import "./globals.css";

const display=Outfit({variable:"--font-display",subsets:["latin"],weight:["400","500","600","700"]});
const body=Work_Sans({variable:"--font-body",subsets:["latin"],weight:["300","400","500","600"]});
const mono=IBM_Plex_Mono({variable:"--font-mono",subsets:["latin"],weight:["400","500"]});

export async function generateMetadata():Promise<Metadata>{const h=await headers();const host=h.get("host")??"localhost:3001";const protocol=h.get("x-forwarded-proto")??(host.startsWith("localhost")?"http":"https");const image=`${protocol}://${host}/og.png`;const title="MF Design e Modelagem 3D";const description="Qualquer ideia, impressa de verdade. Modelagem e impressão 3D personalizada.";return{title,description,openGraph:{title,description,images:[{url:image,width:1536,height:1024,alt:title}]},twitter:{card:"summary_large_image",title,description,images:[image]}}}
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="pt-BR"><body className={`${display.variable} ${body.variable} ${mono.variable}`}>{children}</body></html>}
