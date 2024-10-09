import { randomUUID } from "crypto";

export class DatabaseMock {

        #alunos= new Map()

            //simula um select no banco
            list() {
                return Array.from(this.#alunos.entries())
            }

            //simula um insert
            create(aluno) {
                const alunoId = randomUUID()
                this.#alunos.set(alunoId, aluno)
            }

            //simula um update
            update(id, aluno) {
                this.#alunos.set(id, aluno)
            }

            //simula um delete
            delete(id) {
                this.#alunos.delete(id)
            }
}