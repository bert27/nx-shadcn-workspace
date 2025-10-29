import { Textarea, ThreeDotsMenu } from '@shared';
import './../styles.css';

export function PrincipalPage() {
  return (
    <main className="flex flex-col items-center gap-4 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-2">Pagina Principal</h1>
      <div className="flex w-full flex-col md:flex-row">
        <ThreeDotsMenu />
        <Textarea placeholder="Escribe tu mensaje aquí..." />
      </div>
    </main>
  );
}

export default PrincipalPage;
