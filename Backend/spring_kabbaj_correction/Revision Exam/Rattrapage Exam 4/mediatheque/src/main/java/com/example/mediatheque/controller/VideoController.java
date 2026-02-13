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
import com.example.mediatheque.model.Video;
import com.example.mediatheque.service.VideoService;

@RestController
@RequestMapping("/api/videos")
public class VideoController {
    @Autowired
    private VideoService videoService;

    @GetMapping
    public List<Video> getAllVideos() {
        return videoService.getAllVideos();
    }

    @GetMapping("/{id}")
    public Video getVideoById(@PathVariable Long id) {
        return videoService.getVideoById(id);
    }

    @PostMapping("/ajouter")
    public Video ajouterVideo(@RequestBody Video video) {
        return videoService.ajouterVideo(video);
    }

    @PutMapping("/update/{id}")
    public Video modifierVideo(@PathVariable Long id, @RequestBody Video video) throws NotFoundException {
        return videoService.modifierVideo(id, video);
    }

    @DeleteMapping("/delete/{id}")
    public void supprimerVideo(@PathVariable Long id) throws NotFoundException {
        videoService.supprimerVideo(id);
    }
}
