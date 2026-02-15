#include<stdio.h>
#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>
#include <sys/ipc.h>
#include <sys/sem.h>
#include <sys/types.h>
#include <sys/wait.h>
#include <time.h>

int semid; 


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

void Commencer(int NumCli) {
    printf("Client %d arrive au salon et attend un coiffeur...\n", NumCli);
    P(semid); 
    printf("Client %d est pris en charge par un coiffeur \n", NumCli);
}

void Terminer(int NumCli) {
    printf("Client %d a terminé sa coupe et quitte le salon \n", NumCli);
    V(semid); 
}

void CouperCheveux(int NumCli) {
    Commencer(NumCli);

    int duree = rand() % 4 + 1;
    printf("Client %d est en train de se faire couper les cheveux pendant %d sec...\n", NumCli, duree);
    sleep(duree);

    Terminer(NumCli);
}

int main(void) {
    int NCO, NCL;

    printf("Entrez le nombre de coiffeurs : ");
    scanf("%d", &NCO);

    printf("Entrez le nombre de clients : ");
    scanf("%d", &NCL);

    semid = semget(IPC_PRIVATE, 1, 0666 | IPC_CREAT);
    if (semid == -1) {
        perror("Erreur creation semaphore");
        exit(1);
    }

    semctl(semid, 0, SETVAL, NCO);

    srand(time(NULL));

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

    semctl(semid, 0, IPC_RMID);

    printf("\nTous les clients ont été servis.FIN\n");
    return 0;
}

