Vim�UnDo� v���/C���0��o�Vb�'�"������   +                                  gbε    _�                     +       ����                                                                                                                                                                                                                                                                                                                                                             g^�     �   *   ,   1                {/* NowPlaying */}5��    *                     �                     5�_�                    +       ����                                                                                                                                                                                                                                                                                                                                                             g^�     �   *   ,   1                {/* NowPlaying  */}5��    *                     �                     5�_�                    +       ����                                                                                                                                                                                                                                                                                                                                                             g^�     �   *   ,   1                {/* NowPlaying () */}5��    *                     �                     �    *                     �                     �    *                     �                     5�_�                    +       ����                                                                                                                                                                                                                                                                                                                                                             g^�     �   *   ,   1                {/* NowPlaying  */}5��    *                     �                     5�_�                    +       ����                                                                                                                                                                                                                                                                                                                                                             g^�    �   *   ,   1                {/* NowPlaying () */}5��    *                     �                     5�_�                    *       ����                                                                                                                                                                                                                                                                                                                                                             g^�#    �          1      .import type { Metadata, Viewport } from 'next'   (import { Inter } from 'next/font/google'�         1      2import { getAllPlaylists } from '@/lib/db/queries'�         1      import './globals.css'�         1      Aimport { PlaybackControls } from '@/components/playback-controls'   2import { Playlists } from '@/components/playlists'   =import { PlaybackProvider } from '@/context/playback-context'   =import { PlaylistProvider } from '@/context/playlist-context'�         1      !  title: 'CWL-UI | Music Player',   ,  description: 'A local first music player',   }�         1        width: 'device-width',     initialScale: 1,     maximumScale: 1,     viewportFit: 'cover',     themeColor: '#0A0A0A',   }�         1      +const inter = Inter({ subsets: ['latin'] })�         1        children,�          1        children: React.ReactNode�       "   1      ,  const playlistsPromise = getAllPlaylists()�   "   1   1      
  return (   0    <html lang="en" className={inter.className}>   ]      <body className="dark flex flex-col md:flex-row h-[100dvh] text-gray-200 bg-[#0A0A0A]">           <PlaybackProvider>   @          <PlaylistProvider playlistsPromise={playlistsPromise}>               <Playlists />               {children}             </PlaylistProvider>   =          {/* NowPlaying (Right hand side navigation bar) */}             <PlaybackControls />           </PlaybackProvider>         </body>       </html>     )5��    "                   `      �      �      �                ,       ,   2      ,       ,       �                                             �                         �                    �                         �                    �                       1      q       m       �                       �      P       O       �       !      =      >   �       �       �       �                        �                     �                         y                     �        (      (      )   (       /       1       5�_�                            ����                                                                                                                                                                                                                                                                                                                                       1           V        gb΢    �                   �               �              1   /import type { Metadata, Viewport } from "next";   )import { Inter } from "next/font/google";       3import { getAllPlaylists } from "@/lib/db/queries";       import "./globals.css";       Bimport { PlaybackControls } from "@/components/playback-controls";   3import { Playlists } from "@/components/playlists";   >import { PlaybackProvider } from "@/context/playback-context";   >import { PlaylistProvider } from "@/context/playlist-context";       #export const metadata: Metadata = {    	title: "CWL-UI | Music Player",   +	description: "A local first music player",   };       #export const viewport: Viewport = {   	width: "device-width",   	initialScale: 1,   	maximumScale: 1,   	viewportFit: "cover",   	themeColor: "#0A0A0A",   };       ,const inter = Inter({ subsets: ["latin"] });       $export default function RootLayout({   
	children,   }: Readonly<{   	children: React.ReactNode;   }>) {   ,	const playlistsPromise = getAllPlaylists();       		return (   .		<html lang="en" className={inter.className}>   Z			<body className="dark flex flex-col md:flex-row h-[100dvh] text-gray-200 bg-[#0A0A0A]">   				<PlaybackProvider>   ;					<PlaylistProvider playlistsPromise={playlistsPromise}>   						<Playlists />   						{children}   					</PlaylistProvider>   8					{/* NowPlaying (Right hand side navigation bar) */}   					<PlaybackControls />   				</PlaybackProvider>   
			</body>   			</html>   	);   }5��            1                                   �                    /                       H      5�_�      	                      ����                                                                                                                                                                                                                                                                                                                                       /           V        gb΢    �       
   /   	   import './globals.css';   /import type { Metadata, Viewport } from 'next';   )import { Inter } from 'next/font/google';   +import { NowPlaying } from './now-playing';   6import { PlaybackProvider } from './playback-context';   3import { getAllPlaylists } from '@/lib/db/queries';   =import { OptimisticPlaylists } from './optimistic-playlists';   8import { PlaylistProvider } from './hooks/use-playlist';   7import { PlaybackControls } from './playback-controls';�         /         title: 'Next.js Music Player',   4  description: 'A music player built with Next.js.',�         /        width: 'device-width',     initialScale: 1,     maximumScale: 1,     viewportFit: 'cover',     themeColor: '#0A0A0A',�         /      ,const inter = Inter({ subsets: ['latin'] });�         /        children,�         /        children: React.ReactNode;�          /      -  const playlistsPromise = getAllPlaylists();�       /   /      
  return (   0    <html lang="en" className={inter.className}>   ]      <body className="dark flex flex-col md:flex-row h-[100dvh] text-gray-200 bg-[#0A0A0A]">           <PlaybackProvider>   @          <PlaylistProvider playlistsPromise={playlistsPromise}>   #            <OptimisticPlaylists />               {children}             </PlaylistProvider>             <NowPlaying />             <PlaybackControls />           </PlaybackProvider>         </body>       </html>     );5��                        �      �      �      �                         U                    �                         3                    �                         "                    �                         �                    �                       [      n       i       �              3      2   �      T       R       �              6      6          �      �      5�_�      
           	           ����                                                                                                                                                                                                                                                                                                                                                  V        gbΦ     �                +import { NowPlaying } from "./now-playing";   6import { PlaybackProvider } from "./playback-context";5��                          r       c               5�_�   	              
           ����                                                                                                                                                                                                                                                                                                                                                  V        gbΧ     �                =import { OptimisticPlaylists } from "./optimistic-playlists";   8import { PlaylistProvider } from "./hooks/use-playlist";   7import { PlaybackControls } from "./playback-controls";5��                          �       �               5�_�   
                        ����                                                                                                                                                                                                                                                                                                                                                  V        gbΪ     �         *       5��                          �               ?       5�_�                    !       ����                                                                                                                                                                                                                                                                                                                                                  V        gbά     �         +       5��                          �               ?       5�_�                    #        ����                                                                                                                                                                                                                                                                                                                            #          #          V       gbέ     �   "   #          						<OptimisticPlaylists />5��    "                      �                     5�_�                   %       ����                                                                                                                                                                                                                                                                                                                            #          #          V       gbβ     �   $   %          					<NowPlaying />5��    $                      �                     5�_�                     %       ����                                                                                                                                                                                                                                                                                                                            #          #          V       gbδ    �      	   *       5��                          $              C       5�_�                    %       ����                                                                                                                                                                                                                                                                                                                            #          #          V       gbί     �   $   &   +      					<onplaying />5��    $          
       	   �      
       	       5��