using AlunosAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlunosAPI.Services
{
    public interface IAlunoService
    {
        Task<IEnumerable<Aluno>> GetAlunos(); //obter todos os alunos
        Task<Aluno> GetAluno(int id); //obter um aluno
        Task<IEnumerable<Aluno>> GetAlunosByNome(string nome); //obter alunos pelo nome

        Task CreateAluno(Aluno aluno); //cria um aluno
        Task UpdateAluno(Aluno aluno); //altera um aluno
        Task DeleteAluno(Aluno aluno); //deleta um aluno
    }
}
