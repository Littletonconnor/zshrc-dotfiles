Vim�UnDo� ���H��Z�$�L��@zV���v.OA_ Z�   2   >const inter = Inter({ subsets: ["latin"], preload: "false" });      3      
       
   
   
    gq�x    _�                        (    ����                                                                                                                                                                                                                                                                                                                                                             gq�j     �         2      +const inter = Inter({ subsets: ['latin'] })5��       (                                       �       -                                       �       ,                                       �       +                                       �       *                                     �       *                                     �       *              
                
       5�_�                       4    ����                                                                                                                                                                                                                                                                                                                                                             gq�l     �         2      7const inter = Inter({ subsets: ['latin'], preload: ; })5��       4                                       5�_�                       5    ����                                                                                                                                                                                                                                                                                                                                                             gq�l     �         2      9const inter = Inter({ subsets: ['latin'], preload: ;'' })5��       5                                       �       6                                       �       5                                       �       4                                       �       3                                       5�_�                       3    ����                                                                                                                                                                                                                                                                                                                                                             gq�m     �         2      6const inter = Inter({ subsets: ['latin'], preload:  })5��       3                                       5�_�                       4    ����                                                                                                                                                                                                                                                                                                                                                             gq�m    �         2      8const inter = Inter({ subsets: ['latin'], preload: '' })5��       4                                       �       4                                     5�_�                       8    ����                                                                                                                                                                                                                                                                                                                                                             gq�n    �          2      .import type { Metadata, Viewport } from 'next'   (import { Inter } from 'next/font/google'�         2      2import { getAllPlaylists } from '@/lib/db/queries'�         2      import './globals.css'�         2      5import { NowPlaying } from '@/components/now-playing'   Aimport { PlaybackControls } from '@/components/playback-controls'   2import { Playlists } from '@/components/playlists'   =import { PlaybackProvider } from '@/context/playback-context'   =import { PlaylistProvider } from '@/context/playlist-context'�         2      !  title: 'CWL-UI | Music Player',   ,  description: 'A local first music player',   }�         2        width: 'device-width',     initialScale: 1,     maximumScale: 1,     viewportFit: 'cover',     themeColor: '#0A0A0A',   }�         2      =const inter = Inter({ subsets: ['latin'], preload: 'false' })�         2        children,�      !   2        children: React.ReactNode�   !   #   2      ,  const playlistsPromise = getAllPlaylists()�   #   2   2      
  return (   0    <html lang="en" className={inter.className}>   ]      <body className="dark flex flex-col md:flex-row h-[100dvh] text-gray-200 bg-[#0A0A0A]">           <PlaybackProvider>   @          <PlaylistProvider playlistsPromise={playlistsPromise}>               <Playlists />               {children}             </PlaylistProvider>             <NowPlaying />             <PlaybackControls />           </PlaybackProvider>         </body>       </html>     )5��    #                   �      �      �      �    !           ,       ,   z      ,       ,       �                         X                    �                         >                    �                         �                    �                       g      q       m       �                       �      P       O       �             =      >   �                   �                        �                     �                         y                     �        (      (      )   (       /       1       5�_�      	                 3    ����                                                                                                                                                                                                                                                                                                                                                             gq�t     �         2      >const inter = Inter({ subsets: ["latin"], preload: "false" });5��       3                                       5�_�      
          	      3    ����                                                                                                                                                                                                                                                                                                                                                             gq�v    �         2      6const inter = Inter({ subsets: ["latin"], preload: });5��       3                                       5�_�   	               
      7    ����                                                                                                                                                                                                                                                                                                                                                             gq�w    �         2      ;const inter = Inter({ subsets: ["latin"], preload: false});5��       8                                       5�_�              	         4    ����                                                                                                                                                                                                                                                                                                                                                             gq�u     �         2      5const inter = Inter({ subsets: ["latin"], preload: };5��       4                                       5��