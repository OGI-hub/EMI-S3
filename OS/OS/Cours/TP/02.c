#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/ipc.h>
#include <sys/sem.h>
#include <sys/types.h>
#include <sys/wait.h>
#include <time.h>


int semCoiffeurs;
int semAttente;

struct sembuf op;

void P(int semid) {
    op.sem_num = 0;
    op.sem_op = -1;
    op.sem_flg = 0;
    semop(semid, &op, 1);
}

void V(int semid) {
    op.sem_num = 0;
    op.sem_op = 1;
    op.sem_flg = 0;
    semop(semid, &op, 1);
}


void EntrerSalon(int NumCli) {
    printf("Client %d arrive au salon.\n", NumCli);
    P(semAttente);
    printf("Client %d entre dans la salle d’attente.\n", NumCli);
}

void LireJournal(int NumCli) {
    int t = rand() % 3 + 1;
    printf("Client %d lit le journal pendant %d sec...\n", NumCli, t);
    sleep(t);
}

void Commencer(int NumCli) {
    P(semCoiffeurs); 
    V(semAttente);
    printf("Client %d est pris en charge par un coiffeur.\n", NumCli);
}

void Terminer(int NumCli) {
    printf("Client %d a terminé sa coupe et quitte le salon.\n", NumCli);
    V(semCoiffeurs);
}

void CouperCheveux(int NumCli) {
    EntrerSalon(NumCli);
    LireJournal(NumCli);
    Commencer(NumCli);

    int t = rand() % 4 + 1;
    printf("Client %d se fait couper les cheveux pendant %d sec...\n", NumCli, t);
    sleep(t);

    Terminer(NumCli);
}

int main(void) {
    int NCO, NCL;
    const int NP = 3;

    printf("Entrez le nombre de coiffeurs : ");
    scanf("%d", &NCO);

    printf("Entrez le nombre de clients : ");
    scanf("%d", &NCL);

    srand(time(NULL));

    semCoiffeurs = semget(IPC_PRIVATE, 1, 0666 | IPC_CREAT);
    semAttente   = semget(IPC_PRIVATE, 1, 0666 | IPC_CREAT);


    semctl(semCoiffeurs, 0, SETVAL, NCO);
    semctl(semAttente, 0, SETVAL, NP);

    for (int i = 1; i <= NCL; i++) {
        pid_t pid = fork();
        if (pid == 0) {
            CouperCheveux(i);
            exit(0);
        }
        sleep(1);
    }

    for (int i = 0; i < NCL; i++)
        wait(NULL);

    semctl(semCoiffeurs, 0, IPC_RMID);
    semctl(semAttente, 0, IPC_RMID);

    printf("\nTous les clients ont été servis. Le salon ferme.\n");
    return 0;
}
