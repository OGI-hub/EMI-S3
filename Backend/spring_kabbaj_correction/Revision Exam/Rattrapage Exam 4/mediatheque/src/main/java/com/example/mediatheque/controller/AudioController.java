package com.example.mediatheque.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.mediatheque.exceptions.NotFoundException;
import com.example.mediatheque.model.Audio;
import com.example.mediatheque.service.AudioService;

@RestController
@RequestMapping("/api/audios")
public class AudioController {
    @Autowired
    private AudioService audioService;

    @GetMapping
    public List<Audio> getAllAudios() {
        return audioService.getAllAudios();
    }

    @GetMapping("/{id}")
    public Audio getAudioById(@PathVariable Long id) {
        return audioService.getAudioById(id);
    }

    @PostMapping("/ajouter")
    public Audio ajouterAudio(@RequestBody Audio audio) {
        return audioService.ajouterAudio(audio);
    }

    @PutMapping("/update/{id}")
    public Audio modifierAudio(@PathVariable Long id, @RequestBody Audio audio) throws NotFoundException {
        return audioService.modifierAudio(id, audio);
    }

    @DeleteMapping("/delete/{id}")
    public void supprimerAudio(@PathVariable Long id) throws NotFoundException {
        audioService.supprimerAudio(id);
    }
}
