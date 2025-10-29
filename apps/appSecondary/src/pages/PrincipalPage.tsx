import { MessageFound } from '@shared';
import { CardsCharacters } from '../characters/components/cards-characters';
import FormCharacter from '../characters/components/FormCharacter';
import './../styles.css';

export function PrincipalPage() {
  return (
    <main className="flex flex-col items-center gap-4 min-h-screen" id="app-secondary">
      <h1 className="text-4xl font-bold text-center mb-2">Descubre tu Personaje!!</h1>
      <MessageFound />
      <div className="flex w-full flex-col md:flex-row">
        <div className="w-full md:w-[30%] min-h-[300px] bg-[#05002C] flex justify-center" id="column1">
          <FormCharacter />
        </div>
        <div className="w-full md:w-[70%] min-h-[300px] background-primary flex flex-wrap gap-2" id="column2">
          <CardsCharacters />
        </div>
      </div>
    </main>
  );
}

export default PrincipalPage;
