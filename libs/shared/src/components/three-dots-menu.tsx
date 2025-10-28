import { MoreVertical } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

export function ThreeDotsMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="p-2 rounded-full hover:bg-gray-100">
          <MoreVertical className="h-5 w-5" />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Opciones</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => alert('Editar')}>Editar</DropdownMenuItem>
        <DropdownMenuItem onClick={() => alert('Eliminar')}>Eliminar</DropdownMenuItem>
        <DropdownMenuItem onClick={() => alert('Compartir')}>Compartir</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
