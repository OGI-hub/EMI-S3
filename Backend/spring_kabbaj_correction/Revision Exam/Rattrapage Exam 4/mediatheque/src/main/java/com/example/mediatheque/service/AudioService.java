package com.example.mediatheque.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mediatheque.exceptions.NotFoundException;
import com.example.mediatheque.model.Audio;
import com.example.mediatheque.repo.AudioRepo;

@Service
public class AudioService {
    @Autowired
    private AudioRepo audioRepo;

    public List<Audio> getAllAudios() {
        return audioRepo.findAll();
    }

    public Audio getAudioById(Long id) {
        return audioRepo.findById(id).orElse(null);
    }

    public Audio ajouterAudio(Audio audio) {
        return audioRepo.save(audio);
    }

    public Audio modifierAudio(Long id, Audio audio) throws NotFoundException {
        if (audioRepo.existsById(id)) {
            audio.setId(id);
            return audioRepo.save(audio);
        }
        throw new NotFoundException("Audio not found");
    }

    public void supprimerAudio(Long id) throws NotFoundException {
        if (audioRepo.existsById(id)) {
            audioRepo.deleteById(id);
            return;
        }
        throw new NotFoundException("Audio not found");
    }
}
